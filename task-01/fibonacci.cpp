#include <iostream>
using namespace std;
int main() {
    int x,first,next,sum;
    first=0;
    next=1;
    cin >>x;
    while(next<=x){
        cout<<sum<<" ";
        sum=first+next;
        first=next;
        next=sum;
        
    }
    
    return 0;
}