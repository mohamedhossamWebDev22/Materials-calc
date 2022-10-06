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
    }
    get(){        
        this.txt.innerHTML = `You need ${(parseFloat(this.width.value) * (parseFloat(this.height.value)))} meter square.`;
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
    }
    get(){        
        this.txt.innerHTML = `You need ${(parseFloat(this.width.value) * (parseFloat(this.long.value))) * (parseFloat(this.height.value))} meter square.`;
    }
}

//Data
const materials = new Materials(),
paints = new Paints();

let MatCall = document.getElementById('matCall'),
PaintCall = document.getElementById('paintCall');

//Events
MatCall.onclick = function (){materials.Call()};

materials.closeBtn.onclick = function (){materials.close()};
materials.btn.onclick = function (){materials.get()};



PaintCall.onclick = function (){paints.Call()};
paints.closeBtn.onclick = function (){paints.close()};
paints.btn.onclick = function () {paints.get()};