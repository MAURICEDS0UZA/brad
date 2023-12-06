//method1
window.addEventListener('keydown', (e) => {
    const insert = document.querySelector('.container');
    insert.innerHTML = `
    <div class="row gx-5 ">
            <div class="col key">
                <p style="color: #6aff00;">e.key</p>
                <div class="p-3 border bg-light shadow">${e.key === " " ? "SPACE " : e.key}
                </div>
            </div>
            <div class="col key">
                <p style="color: #3300ff;">e.keyCode</p>
                <div class="p-3 border bg-light shadow">${e.keyCode}</div>
            </div>
            <div class="col key">
                <p style="color:rgb(0, 204, 255);">e.code</p>
                <div class="p-3 border bg-light shadow">${e.code}</div>
            </div>
        </div>`
});

