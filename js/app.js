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
}

//Data
const materials = new Materials();

let MatCall = document.getElementById('matCall'),
PaintCall = document.getElementById('paintCall');

//Events
MatCall.onclick = function (){materials.Call()};

materials.closeBtn.onclick = function (){materials.close()};