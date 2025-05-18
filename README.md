# Nodexa - Site Institucional

Este é um website institucional para Nodexa, uma empresa de soluções de TI de alta tecnologia, consultoria e desenvolvimento de software. O projeto foi construído utilizando Next.js, TypeScript e TailwindCSS.

## Tecnologias Utilizadas

- Next.js 15.3.2
- React 19
- TypeScript
- TailwindCSS 4
- GitHub Actions para CI/CD

## Desenvolvimento Local

Para executar o projeto em seu ambiente local:

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Publicação no GitHub Pages

Este site está configurado para ser publicado automaticamente no GitHub Pages. Siga os passos abaixo para completar a configuração:

1. Crie um repositório no GitHub com o nome `nodexa` (ou outro nome de sua preferência)

2. Adicione o repositório remoto ao seu repositório local:
```bash
git remote add origin https://github.com/seu-usuario/nodexa.git
```

3. Envie seu código para o GitHub:
```bash
git push -u origin master
```

4. No GitHub, acesse as configurações do repositório (Settings > Pages) e verifique se:
   - Source está definido como "Deploy from a branch"
   - Branch está definido como "gh-pages" (criado automaticamente pelo workflow quando você faz push para a branch `master`)

5. Se você tem um domínio personalizado:
   - Adicione seu domínio em Settings > Pages > Custom Domain
   - Configure os registros DNS conforme necessário (geralmente um registro CNAME para `seu-usuario.github.io`)

O GitHub Actions irá automaticamente construir e publicar seu site quando você fizer um push para a branch principal.
