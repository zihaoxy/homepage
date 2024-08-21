// 黑客帝国背景特效JS
//文字
var txts = "0123456789!@#$%^&*()~_+℃☆○※";
//转为数组
txts = txts.split("");
var matrix = document.getElementById("matrix");
var context = matrix.getContext("2d");
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;
var drop = [];
var font_size = 16;
var columns = matrix.width / font_size;
for (var i = 0; i < columns; i++)
    drop[i] = 1;

function drawMatrix() {

    context.fillStyle = "rgba(0, 0, 0, 0.09)";
    context.fillRect(0, 0, matrix.width, matrix.height);


    context.fillStyle = "green";
    context.font = font_size + "px";
    for (var i = 0; i < columns; i++) {
        //随机取要输出的文字
        var text = txts[Math.floor(Math.random() * txts.length)];
        //输出文字，注意坐标的计算
        context.fillText(text, i * font_size, drop[i] * font_size);/*get 0 and 1*/

        if (drop[i] * font_size > (matrix.height * 2 / 3) && Math.random() > 0.95)/*reset*/
            drop[i] = 0;
        drop[i]++;
    }
}
setInterval(drawMatrix, 33);