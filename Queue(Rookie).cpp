//The given array is sorted according to their value. The code starts working by pushing the largest value available. 
//Two stacks are maintained : one for cache purposes and another contains solution of the subproblems  
#include <cstdio>
#include <stack>
#include <iostream>
using namespace std;
 
void swap(int *a,int *b)
{
*a=*a+*b-((*b)=(*a));
}
 
int main()
{
int t,n,i,j;
stack<int> res,s;
scanf("%d",&t);
while(t--)
{
scanf("%d",&n);
int a[n][2];          
for(i=0;i<n;i++) scanf("%d",&a[i][0]);
for(i=0;i<n;i++) scanf("%d",&a[i][1]); 
for(i=0;i<n-1;i++)
for(j=0;j<n-1;j++)
if(a[j][0]>a[j+1][0])
{
swap(&a[j][0],&a[j+1][0]);
swap(&a[j][1],&a[j+1][1]);
}
res.push(a[n-1][0]);
for(i=n-2;i>-1;i--)
{
j=res.size()-a[i][1];
while(j--)
{
s.push(res.top());res.pop();
}
res.push(a[i][0]);
while(!s.empty()) 
{res.push(s.top());
s.pop();
}
}
for(i=n-1;i>-1;i--,res.pop())
a[i][0]=res.top();
printf("%d",a[0][0]);
for(i=1;i<n;i++) printf(" %d",a[i][0]);
printf("\n");
}
return 0;
}
