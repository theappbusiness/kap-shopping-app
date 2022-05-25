import { getCartCookie } from './cookies';

describe('getCartCookie', () => {
  it('returns empty string when no cookies are available', () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: '',
    });
    const cartId = getCartCookie();
    expect(cartId).toBe(undefined);
  });

  it("returns cartId as a string when it's the only cookie", () => {
    // with trailing semi colon
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'cartId=627a843ee88b85ea8e0bc181;',
    });
    const cartId = getCartCookie();
    expect(cartId).toBe('627a843ee88b85ea8e0bc181');

    // without trailing semi colon
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'cartId=627a843ee88b85ea8e0bc181',
    });
    const cartId2 = getCartCookie();
    expect(cartId2).toBe('627a843ee88b85ea8e0bc181');
  });

  it('returns empty string when no cartId cookie exists', () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value:
        'atrc=fbf4bad7-4c2c-4df6-a6ca-de1957289a53; ConstructorioID_client_id=a89bafcd-3a4c-4cee-9fbd-a42686b82ca7; atrc=fbf4bad7-4c2c-4df6-a6ca-de1957289a53; ADRUM=s=1650962998201&r=https%3A%2F%2Fwww.tesco.com%2F; _abck=1F6019AE29CDC6868CCEB22E17126BAD~0~YAAQLDcyF2Ch4PGAAQAAEptc9gd/JJsrrukOww5HY42r3VF9/uFdE+k4I6HHu9a+SMxhLFvR+wY42o3W/xjBvKvzPqCJIxhHINJ1o6Z/N3JzweJsBMZLHR/vVFCLx7YUzoPG/4uG6f8UIMsp0Li8z0v7P7F408w2VS6rL75nyzIuEagkmKQaAKC2imCXlBeypkT+uLA9/+vnaScAmDUZVNgV6tJBEmZbHJMaRS4wRsGiQwKLggJtlsN5QuWZNj8V48A970TvMrevZtPdHdyJK3POXyJrwQfQPzsMzXXlUASbDcyqw5ih65/IFN0MxMtU4lPsHW2YApwoH3kFiJt2de9SCXrRZBFnfZnIz7zXQwD5dHCEalmifNgxnemRtXDPNoN+pP3IYOtqAVciCmYmFr+3bXH2wyw=~-1~-1~-1; bm_sz=C65EAAD69B265669C9077D9AD0857D98~YAAQLDcyF2Oh4PGAAQAAEptc9g9yNA2zL8r8GkozvRELaJ4euL+BA0ZnFkM+zVkN3ygoQ26KPTN2Ph/SbdoclKAJbjdGvpcxNz4OOOsMzdptYDeu08heFqHxzp+s2XvItrNibxznTbcPtQrMh50G6zEP27/EceoUeJoZAbW++do7oxMuhvA4GYTON0qnaeMh6AR+4WnImxNK0vL8B1BvcKe8XxST7qCKa0KzAf58G2ak+L3qEuvAlTMurb2gzHEXB5jtpgay08jqsyqPbkBOJRy16XXo65Dtc7nWNCK8Q0guDw==~3223858~4534324; bm_sv=C8DA293AF496064239916E8A0CA00076~YAAQLDcyF2ih4PGAAQAAtKdc9g8QDObsA8FLDsLlszT5CDjL2Wu1DsohrRac+ocVe2f8/xKGRmYGUgUvEi/RsJ3YJt0r/VbvkMyusgIZOb6oZuRLvUkBeoqAovV+Ec/c2WN3dZ4sWg7j67phDHWBCBoKjd5A31f9o82YlIH1k0V0j8t8ip/biSH7z0vJK8N4+03Ii3oQtAZetycKBkJAt8kBSxlyZzApSnE9WIvhaSpG/SAJf7W6KbaipyxNjb0=~1',
    });
    const cartId = getCartCookie();
    expect(cartId).toBe(undefined);
  });

  it('returns cartId as the correct string when there are multiple cookies', () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value:
        'atrc=fbf4bad7-4c2c-4df6-a6ca-de1957289a53; ConstructorioID_client_id=a89bafcd-3a4c-4cee-9fbd-a42686b82ca7; atrc=fbf4bad7-4c2c-4df6-a6ca-de1957289a53; ADRUM=s=1650962998201&r=https%3A%2F%2Fwww.tesco.com%2F; _abck=1F6019AE29CDC6868CCEB22E17126BAD~0~YAAQLDcyF2Ch4PGAAQAAEptc9gd/JJsrrukOww5HY42r3VF9/uFdE+k4I6HHu9a+SMxhLFvR+wY42o3W/xjBvKvzPqCJIxhHINJ1o6Z/N3JzweJsBMZLHR/vVFCLx7YUzoPG/4uG6f8UIMsp0Li8z0v7P7F408w2VS6rL75nyzIuEagkmKQaAKC2imCXlBeypkT+uLA9/+vnaScAmDUZVNgV6tJBEmZbHJMaRS4wRsGiQwKLggJtlsN5QuWZNj8V48A970TvMrevZtPdHdyJK3POXyJrwQfQPzsMzXXlUASbDcyqw5ih65/IFN0MxMtU4lPsHW2YApwoH3kFiJt2de9SCXrRZBFnfZnIz7zXQwD5dHCEalmifNgxnemRtXDPNoN+pP3IYOtqAVciCmYmFr+3bXH2wyw=~-1~-1~-1; cartId=627a843ee88b85ea8e0bc181; bm_sz=C65EAAD69B265669C9077D9AD0857D98~YAAQLDcyF2Oh4PGAAQAAEptc9g9yNA2zL8r8GkozvRELaJ4euL+BA0ZnFkM+zVkN3ygoQ26KPTN2Ph/SbdoclKAJbjdGvpcxNz4OOOsMzdptYDeu08heFqHxzp+s2XvItrNibxznTbcPtQrMh50G6zEP27/EceoUeJoZAbW++do7oxMuhvA4GYTON0qnaeMh6AR+4WnImxNK0vL8B1BvcKe8XxST7qCKa0KzAf58G2ak+L3qEuvAlTMurb2gzHEXB5jtpgay08jqsyqPbkBOJRy16XXo65Dtc7nWNCK8Q0guDw==~3223858~4534324; bm_sv=C8DA293AF496064239916E8A0CA00076~YAAQLDcyF2ih4PGAAQAAtKdc9g8QDObsA8FLDsLlszT5CDjL2Wu1DsohrRac+ocVe2f8/xKGRmYGUgUvEi/RsJ3YJt0r/VbvkMyusgIZOb6oZuRLvUkBeoqAovV+Ec/c2WN3dZ4sWg7j67phDHWBCBoKjd5A31f9o82YlIH1k0V0j8t8ip/biSH7z0vJK8N4+03Ii3oQtAZetycKBkJAt8kBSxlyZzApSnE9WIvhaSpG/SAJf7W6KbaipyxNjb0=~1',
    });
    const cartId = getCartCookie();
    expect(cartId).toBe('627a843ee88b85ea8e0bc181');
  });
});
