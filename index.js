/*PRIMA PARTE
 NASA va trimite pe Marte mai mulți roboți ce vor explora planeta.
 Aceștia vor naviga o suprafață dreptunghiulară pentru a colecta 
 diferite date ce vor fi transmise înapoi pe Pământ.

Poziția unui robot este reprezentată de coordonatele sale x și y, 
precum și o literă care să desemneze punctul cardinal spre care 
este orientat (N, E, S, V). Spre exemplu, dacă poziția sa este 
0, 0, N, atunci robotul este în colțul din stânga jos al platoului 
de pe Marte și se îndreaptă spre nord (în sus).

Pentru a controla robotul, NASA trimite un set de instrucțiuni 
care pot fi L (schimbarea direcției 90 de grade la stânga),
 R (90 de grade la dreapta) și M (deplasare cu o unitate și menține direcția).
  De exemplu, pentru un robot care are coordonatele 0, 0, N, 
  instrucțiunea M va însemna că robotul va avea coordonatele noi 0, 1, N.

Cerințe:
Setați coordonatele colțului dreapta sus al platoului dreptunghiular,
 având colțul stânga jos (0,0).
Setați poziția robotului pe platou și orientarea sa.
Pentru o listă de instrucțiuni, afișați poziția finală a robotului.

Exemplu input:

5 5
1 2 N
LMLMLMLMM

Output așteptat:

1 3 N */

/* A DOUA PARTE EXTENSIE
Dacă un roboțel primește o comandă ce îl face să iasă 
de pe hartă, toate comenzile ulterioare vor fi ignorate,
 iar la final va fi adăugat textul RIP după
coordonatele sale înaintea ieșirii de pe hartă.
Exemplu input:
5 5
1 5 N
LMMRMLMRM
Output:
0 5 V RIP
*/

function giveCordinates (x, y, orientation, instructioToMove, size ) {
	let cordinates = [],
		[sizeXMax, sizeYMax] = size;
	for(let  letter of instructioToMove) {
			if (letter === 'L') {
				orientation = turnLeft( orientation)
			} else if (letter === 'R') {
				orientation = turnRight(orientation);	
			} else if (letter == 'M') {
                if(!isOnMap(x, y, sizeXMax, sizeYMax, orientation)){
                    return [x, y, orientation, "RIP"]
                }else {
                [x, y] = moveForward(x, y, orientation)  
                }
			}
        }		
	}
	     //if (x > sizeXMax || y > sizeYMax) {
		//return `RIP`
	    //}

	cordinates.push(x, y, orientation);
	return cordinates

    function turnLeft(orientation) {
			if (orientation == "N") {
				orientation = 'V'
			} else if (orientation == "V") {
				orientation = 'S'
			} else if (orientation == "S") {
				orientation = 'E'
			}  else if (orientation == "E") {
				orientation = 'N'
			} 
	    return orientation
    }
    function turnRight(orientation) {
		if (orientation == "N") {
			orientation = 'E'
		} else if (orientation == "E") {
			orientation = 'S'
		} else if (orientation == "S") {
			orientation = 'V'
		}  else if (orientation == "V") {
			orientation = 'N'
		} 
	    return orientation
    }
    function isOnMap(x, y, sizeXMax, sizeYMax, orientation){
        if ((x == sizeXMax && orientation == "E")||
        ( x == 0 && orientation =="V") || 
        ( y == sizeYMax && orientation == "N") ||
        ( y == 0 && orientation =="S")){
            return false
        }
        return true
    }

    function moveForward(x, y, orientation) {
	    if (orientation == 'N') {
		y++
	    } else if (orientation == 'S') {
		y--
	    } else if (orientation == 'E') {
		x++
	    } else if (orientation == 'V') {
		x--
	    }
	    return [x, y];
    }

console.log(giveCordinates(1, 5, 'N', 'LMMRMLMRM', [5, 5]));