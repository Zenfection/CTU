int linearSearch(int x,List L);           //tìm kiếm tuyến tính (không cần sắp xếp)
int binarySearch(int x,List L);           //tìm kiếm nhị phân (cần sắp xếp)

int linearSearch(int x,List L){
    for (int i = 0; i < L.Size; i++){
        if(L.Elements[i] == x){
            return i;
        }
    }
    return 1;
}
int binarySearch(int x,List L){
    int left = 0;
    int right = L.Size - 1;
    int mid;
    while(right >= left){
        mid = left + ((right - left) / 2);
        if(L.Elements[mid] == x){
            return mid;
        }
        else if(L.Elements[mid] > x){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}