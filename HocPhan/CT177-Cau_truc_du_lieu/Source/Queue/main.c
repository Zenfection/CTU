#include <stdio.h>
#include "queue.h"
int main(int argc, char const *argv[]){
    Queue Q;
    makeNullQueue(&Q);
    // Q.Elements[0] = 1;
    // Q.Elements[1] = 2;
    // Q.Elements[2] = 3;
    // Q.Elements[3] = 4;
    // Q.Front = 0;
    // Q.Rear = 3;
    insertQueue(1,0,&Q);
    insertQueue(2,1,&Q);
    insertQueue(3,2,&Q);
    deleteQueue_byValue(2,&Q);
    displayQueue(Q);
    return 0;
}
