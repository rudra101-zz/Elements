//this program tries to find the no. of divisors of a number.
/*
Here we find the number of divisors of a number 'n'.
*/

#include <cstdio>
#include <iostream>
using namespace std;

int main()
{
int count,n,t,i,res; // "res" will contain our result.
scanf("%d",&t); //Number of Test Cases.
while(t--)
{
scanf("%d",&n);
res=1;
for(i=2;i<=n;i++)

{      if(n%i==0)
      {
          count=1;
          while(n%i==0) 
          {
                        count++;
                        n/=i;
          }

          res*=count;
      }
}
printf("%d\n",res);         
}
return 0;
}

 
