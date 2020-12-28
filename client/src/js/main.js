import * as io from 'socket.io-client';
import * as styles from '../css/main.scss';
import { fromEvent } from 'rxjs';

document.addEventListener('DOMContentLoaded', () => {
    const stylesArray = [];
    const bookSaveButton = document.querySelector('#book_save_button');
    const bookTitleInput = document.querySelector('#book_title_input');

    Object.entries(styles.default).forEach(([key, value]) => {
        stylesArray.push({ key: key, value: value });
    });

    fromEvent(bookSaveButton, 'click').subscribe((e) => {
        const title = bookTitleInput.value;

        socket.emit('add book', {
            id: 0,
            name: title
        });

        bookTitleInput.value = '';
    });

    const socket = io('http://localhost:3001');
    socket.on('message', (msg) => {
        addBook(msg);
    });

    function addBook(bookName) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(bookName));
        const ul = document.querySelector('#books');
        ul.className = stylesArray.find((className) => className.key == 'books').value
        ul.appendChild(li);
    }
});
