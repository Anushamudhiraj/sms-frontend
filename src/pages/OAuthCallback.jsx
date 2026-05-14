import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleOAuthCallback } from '../services/authService';

export default function OAuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Processing OAuth callback...');

  useEffect(() => {
    const processCallback = async () => {
      // What Facebook sends back
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const error = searchParams.get('error');

      // What Django sends back after processing
      const success = searchParams.get('success');
      const platform = searchParams.get('platform');
      const account = searchParams.get('account');
      const details = searchParams.get('details');

      // Case 1: Facebook returned an error
      if (error) {
        setStatus(
          `Authentication failed: ${error.replace(/_/g, ' ')}${details ? ` — ${details}` : ''}`
        );
        setTimeout(() => navigate('/settings'), 3000);
        return;
      }

      // Case 2: Django already processed and redirected back with success
      if (success && platform) {
        setStatus(`Successfully connected ${platform}${account ? ` (${account})` : ''}! Redirecting...`);
        setTimeout(() => navigate('/settings'), 2000);
        return;
      }

      // Case 3: Facebook returned code — send it to Django
      if (code) {
        try {
          setStatus('Connecting to Facebook...');
          const response = await handleOAuthCallback({ code, state });

          if (response.success) {
            setStatus(`Successfully connected! Redirecting...`);
            setTimeout(() => navigate('/settings'), 2000);
          } else {
            setStatus(`Authentication failed: ${response.error || 'Unknown error'}`);
            setTimeout(() => navigate('/settings'), 3000);
          }
        } catch (err) {
          setStatus('Authentication failed. Please try again.');
          setTimeout(() => navigate('/settings'), 3000);
        }
        return;
      }

      // Case 4: No valid params at all
      setStatus('Invalid callback parameters. Redirecting...');
      setTimeout(() => navigate('/settings'), 2000);
    };

    processCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-[#fbf8fc] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">security</span>
          </div>
          <h1 className="text-2xl font-bold text-[#031635] mb-2">OAuth Authentication</h1>
          <p className="text-gray-600">{status}</p>
        </div>
        <div className="animate-pulse">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Please wait while we complete the authentication process...
        </p>
      </div>
    </div>
  );
}