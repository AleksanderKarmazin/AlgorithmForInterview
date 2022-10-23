using CSharpTest;

namespace CSharpTest;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        // arrange
        int x = 10; 
        int y = 20;
        int expected = 30;
        // act 
        Calc c = new Calc();
        int res = c.Sum(x,y);
        Console.WriteLine(res);
        // assert
        Assert.AreEqual(expected,y);
        
    }

        [TestMethod]
    public void TestMethod2()
    {
        // arrange
        int x = 6780; 
        int y = 7580;
        int expected = 30;
        // act 
        Calc c = new Calc();
        int res = c.Sum(x,y);
        Console.WriteLine(res);
        // assert
        
    }
}