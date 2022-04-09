#include <stdio.h>
#include <string.h>
void main()
{
  char str[100], len, t = 0, space = -1;
  printf("Enter the string");
  scanf("%s", &str);
  len = strlen(str);
  // restriction for even length
  if (len % 2 == 0)
  {
    printf("Not possible");
    return;
  }
  // loop till the string length as row
  for (int i = 0; i < len; i++)
  {
    // top view
    if (i <= len / 2)
    {
      // pre space
      for (int j = i; j < len / 2; j++)
      {
        printf(" ");
        t++;
      }
      // charector printed with col index(t)
      printf("%c", str[t]);
      // edge case for first row
      if (i != 0)
      {
        t++;
        // print even spaces also track the col index
        for (int j = 0; j < space; j++)
        {
          printf(" ");
          t++;
        }
        // char printed with col index
        printf("%c", str[t]);
      }
      printf("\n");
      t = 0;
      space += 2;
    }
    else
    {
      // bottom view
      if (i == len / 2 + 1)
        space -= 4;
      for (int j = 0; j < i - (len / 2); j++)
      {
        printf(" ");
        t++;
      }
      printf("%c", str[t]);
      if (i != len - 1)
      {
        t++;
        for (int j = space; j > 0; j--)
        {
          printf(" ");
          t++;
        }
        printf("%c", str[t]);
      }
      printf("\n");
      space -= 2;
      t = 0;
    }
  }
}