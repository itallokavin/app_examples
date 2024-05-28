export function maskCPF(value: string) {
    return value
        .replace(/\D/g, '')                      // Remove todos os caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2')         // Adiciona um ponto após os primeiros 3 dígitos
        .replace(/(\d{3})(\d)/, '$1.$2')         // Adiciona um ponto após os próximos 3 dígitos
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')    // Adiciona um traço após os próximos 3 dígitos
        .replace(/(-\d{2})\d+?$/, '$1');         // Limita os dígitos após o traço a 2
}

export function maskPhone(value: string) {
    const numbers = value.replace(/\D/g, '');

    let maskedValue = numbers.replace(/^(\d{2})/, '($1) ');
    
    if (numbers.length > 2) {
        maskedValue = maskedValue.replace(/\)$/, ') ');
    }
    
    if (numbers.length > 7) {
        maskedValue = maskedValue.replace(/(\d{4})$/, '-$1');
    }

    return maskedValue;
}
