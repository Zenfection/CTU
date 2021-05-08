int linearSearch(int x,List L);          //* tìm tiếm tuyến tính
Node *middle(Node *start,Node *last);    //* tìm node giữa
int binarySearch(int x,List L);          //* tìm kiếm nhị phân

int lineaSearch(int x,List L){
    Node *temp = L.Head;
    int i = 0;
    while (temp != NULL){
        if(temp->data == x){
            return i;
        }
        i++;
        temp = temp->Next;
    }
    return -1;
}
Node *middle(Node *start,Node *last){
    if(start == NULL){
        return NULL;
    }
    Node *temp1 = start;
    Node *temp2 = start->Next;
    while (temp2 != last){
        temp2 = temp2->Next;
        if(temp2 != last){
            temp1 = temp1->Next;
            temp2 = temp2->Next;
        }
    }
    return temp1;
}
