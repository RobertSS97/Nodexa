// Este arquivo contém as configurações de caminhos para produção vs desenvolvimento
const baseURL = process.env.NODE_ENV === 'production' ? '/Nodexa' : '';

export default baseURL;
