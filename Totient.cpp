
/*
  The EULER TOTIENT FUNCTION
  Leonhard Euler: Respect !
*/
//This program finds the value of phi(n).

#include <cstdio>
#include <iostream>
#include <vector>
#include <cstring>
#include <cmath>
#include <cstdlib>
#include <sstream>
#include <map>
#include <stack>
#include <queue>
using namespace std;

int main()
{
int i,res,t,n;
scanf("%d",&t);//enter the number of test cases.
while(t--)
{
    scanf("%d",&n); //We will find phi(n).
    res=n;
    for(i=2;i*i<=n;i++)
     {
       if(n%i==0) res-=res/i;
       while(n%i==0) n/=i;
     }
     if(n>1) res-=res/n;
     printf("%d\n",res);
}
return 0;
}
