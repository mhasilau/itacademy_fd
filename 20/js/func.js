export function template() {
    const ul = document.createElement('ul');

    const buttCopmleted =  document.createElement('button');
    buttCopmleted.innerHTML = 'Copmleted';
    document.body.append(buttCopmleted);

    const buttIncopmleted =  document.createElement('button');
    buttIncopmleted.innerHTML = 'Incopmleted';
    document.body.append(buttIncopmleted);

    const buttClear =  document.createElement('button');
    buttClear.innerHTML = 'Clear';
    document.body.append(buttClear);
}

export function Clear() {
    ul.innerHTML = '';
}