document.querySelectorAll('.radio-wrap input').forEach( radioBtn => {
    radioBtn.addEventListener('change', () => {
        document.querySelectorAll('.radio-wrap label').forEach( label => {
            label.classList.remove('checked')
        })
        radioBtn.closest('label').classList.toggle('checked')
    })
})

document.querySelectorAll('.select li').forEach( li => {
    li.addEventListener('click', () => {
        li.closest('details').querySelector('input').value = li.textContent
        li.closest('details').removeAttribute('open') 
    })
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let form = e.target;

    if (form.classList.contains('check')) {
        console.log(form.querySelector('textarea').value);
        form.classList.remove('check')
        form.querySelectorAll('.check-item').forEach( item => {
            item.remove();
        })
        form.reset()
        alert('Заказ успешно оформлен!')
    }else{
        let names = {
            'name': 'Ф.И.О',
            'from': 'Откуда',
            'to': 'Куда',
            'manager': 'Менеджер',
            'typePackage': 'Вид отправления',
            'important': 'Ценное',
        };

        let formData = new FormData(form);
        let check = `<p class="check-item">Подтвердите заказ:</p><textarea readonly class="check-item">`;
    
        formData.forEach( (value, id) => {
            if (value == 'on') {
                value = 'Да'
            }
            
            check += `${names[id]}: ${value}\n`;
        })
    
        check += `</textarea>
        <div class="check-item button-wrapper">
        <button type="button" class="grey">Назад</button>
        <button>Подтвердить</button>
        </div>`;
    

        form.insertAdjacentHTML('beforeend', check);
        form.classList.add('check');

        form.querySelector('button[type=button]').addEventListener('click', () => {
            form.classList.remove('check')
            form.querySelectorAll('.check-item').forEach( item => {
                item.remove();
            })
        })
    }
})