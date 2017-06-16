import HTML from '../src/index';

describe('HTML', () => {
  describe('load', async () => {
    test('w/o options', async () => {
      const html = new HTML();
      const result = await html.load();
      expect(result).toBeNull();
    });

    test('w/ options', async () => {
      const template = '<h6><%= test %></h6>';
      const output = '<h6>TEST HERE</h6>';
      const html = new HTML(
        {
          template,
          engine: 'ejs',
          data: {
            test: 'TEST HERE',
          },
        });
      const result = await html.load();
      expect(result).toBe(output);
    });
  });
});
