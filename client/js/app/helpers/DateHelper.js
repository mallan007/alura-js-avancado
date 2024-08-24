class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error('Data deve estar no formato aaaa-mm-dd');
       return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

}
/*
l8 : Regex para validar o formato de data: '/d' para número inteiro, '{4}' para 4 dígitos para ano e '{2}' para 2 dígitos para o mês e dia.
    O ˆ indica "começando com " e o $ "terminando com".
l13 : Template String;
*/