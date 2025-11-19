import React from 'react';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center border border-slate-100">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight capitalize">
          {APP_NAME}
        </h1>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Your <strong>{APP_NAME}</strong> project is initialized and ready for deployment to Vercel.
        </p>
        
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left">
            <h3 className="text-sm font-semibold text-slate-800 mb-1">Status</h3>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Live and Ready to Edit</span>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-slate-400 text-sm">
        {APP_NAME} v0.1.0
      </footer>
    </div>
  );
};

export default App;