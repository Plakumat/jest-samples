test("expectation", () => {
    expect("String Value").toBe("String Value"); //Same strings return true
    expect(5).toBe(5); //Same numbers return true
    expect([5]).toBe([5]); //Same arrays never return true. It's because of every array has a different place in memory with unique pointer or id

    //If we want to compare values of the two arrays or object
    expect([5]).toEqual([5]);
    
    let data = {
        value: Date.now()
    }

    expect(data).toEqual({
        value: expect.any(Number)
    })
});

/*
    https://jestjs.io/docs/expect
*/