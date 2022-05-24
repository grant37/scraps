#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char *urlEncode(char *str, int trueLength)
{
  int spaceCount = 0;
  for (int i = 0; i < trueLength; i++)
  {
    if (str[i] == ' ')
    {
      spaceCount++;
    }
  }

  if (spaceCount == 0)
  {
    return str;
  }

  int newLength = trueLength + spaceCount * 2;
  char *newStr = malloc(newLength + 1);

  int j = 0;
  for (int i = 0; i < trueLength; i++)
  {
    if (str[i] == ' ')
    {
      newStr[j] = '%';
      newStr[j + 1] = '2';
      newStr[j + 2] = '0';
      j += 3;
    }
    else
    {
      newStr[j] = str[i];
      j++;
    }
  }

  return newStr;
}

int main(int argc, char *argv[])
{

  if (argv[1] == NULL)
  {
    return 0;
  }

  size_t length = strlen(argv[1]);
  char *encoded = urlEncode(argv[1], length);

  printf("%s\n", encoded);
  return 0;
}