

def sumOfMultiples(num)
   sum = 0
  for i in 1...num do
    sum += i if i % 3 === 0 || i % 5 === 0
  end
  return sum
end

sumOfMultiples 10
