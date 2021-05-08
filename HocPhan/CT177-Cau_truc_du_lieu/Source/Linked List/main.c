#include <stdio.h>
//#include "linkedList.h"
//#include "sortList.h"
//#include "searchList.h"
#include "sentenceList.h"
int main(int argc, char const *argv[]){
    Sentence S;
    makeNullSentence(&S);
    inputSentence(&S);
    normalizeSentence(&S);
    displaySentence(S);
    return 0;
}
