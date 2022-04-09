#include <stdio.h>

// Compiler version gcc  6.3.0

int main()
{
  int n, len, start, end;
  printf("Enter the number");
  scanf("%d", &n);
  len = n * 2 - 1;
  start = 0;
  end = len - 1;
  int arr[len][len];
  while (n != 0)
  {
    for (int i = start; i <= end; i++)
    {
      for (int j = start; j <= end; j++)
      {
        if (i == start || i == end || j == start || j == end)
        {
          arr[i][j] = n;
        }
      }
    }
    ++start;
    --end;
    --n;
  }
  // print the pattern
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j < len; j++)
    {
      printf("%d ", arr[i][j]);
    }
    printf("\n");
  }
}