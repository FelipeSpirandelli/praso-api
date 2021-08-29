import { expect, server, BASE_URL } from './setup';
describe('Categories', () => {
  it('get categories page', done => {
    server
      .get(`${BASE_URL}/categories`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('description');
          expect(m).to.have.property('keywords');
        });
        done();
      });
  });
});
it('posts category', done => {
    const data = { 
        name: 'linda',
        description: 'produto maravilhoso mesmo',
        keywords: 'batata, nao, mao'
    };
    server
      .post(`${BASE_URL}/categories`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('category_id');
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('description', data.description);
          expect(m).to.have.property('keywords', data.keywords);
        });
        done();
      });
  });