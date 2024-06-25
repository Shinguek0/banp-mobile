export const defaultErrorMessage = (errorCode: string) => {
  const errors: Record<string, string> = {
    'auth/email-already-in-use': 'Email já cadastrado.',
    'auth/invalid-email': 'Email inválido.',
    'auth/weak-password': 'Senha fraca.'
  };

  return errors[errorCode] || 'Erro desconhecido';
};
