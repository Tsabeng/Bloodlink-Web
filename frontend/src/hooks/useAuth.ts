// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { authService } from '@/services/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      console.error("Auth failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return { user, loading, refetch: loadUser, logout: authService.logout };
};