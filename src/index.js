/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]) {
    var mas=preferences;
    var index=0;
    var arrayBool=[];
    var masAnaliz=[]; //поиск треугольников
    for(var i=0;i<mas.length;i++)arrayBool.push(true);
    //var razmMas=arrayBool.length;
    for(i=0;i<mas.length;i++){
        if(arrayBool[i]===false)continue;
        arrayBool[i]=false;
        masAnaliz.push(i+1);
        masAnaliz.push(mas[masAnaliz[0]-1]);
        if(arrayBool[masAnaliz[1]-1]===true&&masAnaliz.length===2){
            arrayBool[masAnaliz[1]-1]=false;
            masAnaliz.push(mas[masAnaliz[1]-1]);

        }
        var flag=true;
        while(flag==true)
        {
            flag=false;
            if (arrayBool[masAnaliz[2]-1] === true && masAnaliz.length === 3) {
                arrayBool[masAnaliz[2] - 1] = false;
                masAnaliz.push(mas[masAnaliz[2]-1]);
                if (masAnaliz[0] === mas[masAnaliz[2] - 1]) {
                    arrayBool[masAnaliz[2] - 1] = false;
                    ++index;
                    masAnaliz = [];
                }
                else {
                    masAnaliz.shift();
                    flag=true;
                }

            }
            else masAnaliz = [];
        }
    }
    return index;
};
