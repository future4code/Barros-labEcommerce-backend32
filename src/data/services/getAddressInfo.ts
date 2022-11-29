import axios from "axios"


async function getAddressInfo(cep:string) {
const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
console.log(data)
return `${data.logradouro}, ${data.bairro}, ${data.localidade}`
}

export default getAddressInfo