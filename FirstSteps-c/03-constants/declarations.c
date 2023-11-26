#include<stdio.h>
// --------------------------------------- Constants
/* #define NOMBRE valor; */
#define PI 3.1416;
#define EDAD 29

// --------------------------------------- Variables
// tipo nombre = valor;
// example: 
// float sueldo = 15.456;
// float bono = 4.560;

int main (){
    float sueldo = 15.456;
    float bono = 4.560;
    sueldo = sueldo + bono; // sueldo += bono;
    printf("El sueldo es: %f\n", sueldo);
    return 0;
}
