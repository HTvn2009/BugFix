(function seedStarterProblems() {
    const seedVersion = 'starter_problems_seeded_v1';
    if (localStorage.getItem(seedVersion)) return;

    const starterProblems = [
        {
            id: 1000000000001,
            title: 'Introduction: Calculate A + B',
            desc: 'Read two integers, A and B, and print their sum.\n\nInput: Two integers A and B.\nOutput: The value of A + B.',
            testCases: [
                { input: '1 2', output: '3' },
                { input: '-5 8', output: '3' },
                { input: '0 0', output: '0' },
                { input: '123 456', output: '579' }
            ]
        },
        {
            id: 1000000000002,
            title: 'Sum of a Sequence',
            desc: 'Given N numbers, calculate A1 + A2 + ... + An.\n\nInput: The first number is N, followed by N integers: N A1 A2 ... An.\nOutput: The sum of the N integers.',
            testCases: [
                { input: '1 42', output: '42' },
                { input: '5 1 2 3 4 5', output: '15' },
                { input: '4 -1 -2 -3 -4', output: '-10' },
                { input: '3 -5 0 5', output: '0' },
                { input: '6 10 20 30 40 50 60', output: '210' },
                { input: '5 0 0 0 0 0', output: '0' },
                { input: '2 1000 2000', output: '3000' },
                { input: '7 1 1 1 1 1 1 1', output: '7' },
                { input: '4 25 -10 5 -20', output: '0' },
                { input: '10 1 2 3 4 5 6 7 8 9 10', output: '55' }
            ]
        },
        {
            id: 1000000000003,
            title: 'Circle Circumference',
            desc: 'Given the radius R, calculate the circumference of a circle. Use π = 3.14.\n\nInput: A number R representing the radius.\nOutput: The circumference calculated using 2 × 3.14 × R.',
            testCases: [
                { input: '1', output: '6.28' },
                { input: '2', output: '12.56' },
                { input: '3', output: '18.84' },
                { input: '0', output: '0' },
                { input: '0.5', output: '3.14' },
                { input: '2.5', output: '15.7' },
                { input: '7', output: '43.96' },
                { input: '10', output: '62.8' },
                { input: '100', output: '628' },
                { input: '1.25', output: '7.85' }
            ]
        }
    ];

    let existingProblems = [];
    try {
        existingProblems = JSON.parse(localStorage.getItem('problems') || '[]');
        if (!Array.isArray(existingProblems)) existingProblems = [];
    } catch (error) {
        existingProblems = [];
    }

    const existingIds = new Set(existingProblems.map(problem => problem.id));
    const missingStarterProblems = starterProblems.filter(problem => !existingIds.has(problem.id));
    localStorage.setItem('problems', JSON.stringify([...missingStarterProblems, ...existingProblems]));
    localStorage.setItem(seedVersion, 'true');
})();
