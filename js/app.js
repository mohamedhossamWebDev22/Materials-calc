//Classes
class Materials {
    constructor (mat, height, width, btn, txt){
        this.mat = document.getElementById('mt');

        this.height = document.getElementById('height');
        this.width = document.getElementById('width');

        this.txt = document.getElementById('matTxt');
        this.btn = document.getElementById('matDone');

        this.closeBtn = document.getElementById('close');
    }

    Call(){
        this.mat.style.display = 'flex';
    }
    close(){
        this.mat.style.display = 'none';

        this.txt.innerHTML = '';

        this.height.value = '';
        this.width.value = '';
    }
    get(){ 
        if (this.width.value != '' || this.height.value != '') {
            this.txt.innerHTML = `You need ${(parseFloat(this.width.value) *  (parseFloat(this.height.value)))} meter square.`;
        }
        else{
            alert('You must type a thing!!')
        }
    }
}

class Paints {
    constructor (mat, height, width, btn, txt){
        this.pnt = document.getElementById('pnt');

        this.height = document.getElementById('height2');
        this.width = document.getElementById('width2');
        this.long = document.getElementById('long');

        this.txt = document.getElementById('pntTxt');
        this.btn = document.getElementById('pntDone');

        this.closeBtn = document.getElementById('close2');
    }

    Call(){
        this.pnt.style.display = 'flex';
    }
    close(){
        this.pnt.style.display = 'none';

        this.txt.innerHTML = '';

        this.height.value = '';
        this.width.value = '';
        this.long.value = '';
    }
    get(){ 
        if (this.width.value != '' || this.height.value != '' || this.long.value != '') {
            this.txt.innerHTML = `You need ${(parseFloat(this.width.value) * (parseFloat(this.long.value))) * (parseFloat(this.height.value))} meter square.`;
        }
        else{
            alert('You must type a thing!!')
        }
    }
}


function advertSmart() {
    window.open(
        'https://www.facebook.com/Concrete.Construction.interior/', 
        '_blank'
    )
}

//Data
const materials = new Materials(),
paints = new Paints();

let MatCall = document.getElementById('matCall'),
PaintCall = document.getElementById('paintCall');

let cop = document.getElementById('logo');

//Events
MatCall.onclick = function (){materials.Call()};

materials.closeBtn.onclick = function (){materials.close()};
materials.btn.onclick = function (){materials.get()};



PaintCall.onclick = function (){paints.Call()};
paints.closeBtn.onclick = function (){paints.close()};
paints.btn.onclick = function () {paints.get()};

cop.onclick = function (){advertSmart()};