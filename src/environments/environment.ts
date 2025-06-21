// src/environments/environment.ts
export const environment = {
  production: false,
  // Chave da NewsAPI (não vamos mais usar, mas podemos deixar aqui)
  newsApiKey: 'SUA_CHAVE_ANTIGA_AQUI',

  // Chave da API-FOOTBALL (a que vamos usar agora)
  apiFootballKey: '72c2a858fe0896c04aa3deebf72fc45d'
};

export const apiCommando = {
  way : [
    {
      name: "Cadastro de Usuáro",
      description: "Cria um novo usuário no sistema.",
      method: "POST",
      url: "/users",
    },
    {
      name: "Login de Usuário",
      description: "Realiza o login de um usuário existente.",
      method: "POST",
      url: "/users/login",
    },
    {
      name: "Login por Token",
      description: "Realiza o login de um usuário utilizando um token de autenticação.",
      method: "POST",
      url: "/users/login/:token",
    },
    {
      name: "Reccuperação de Senha",
      description: "Recupera a senha de um usuário através do email.",
      method: "POST",
      url: "/users/login/recover",
    },
    {
      name: "Reccuperação de Senha por token",
      description: "Recupera a senha de um usuário através do email.",
      method: "POST",
      url: "/users/login/recover/:token",
    }
  ]
}