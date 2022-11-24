import axios from "axios";

async function getAddressInfo(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return {
      cep: data.cep,
      logradouro: data.logradouro,
      numero: data.gia,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default getAddressInfo;
