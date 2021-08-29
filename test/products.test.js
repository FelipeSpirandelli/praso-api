import { expect, server, BASE_URL } from './setup';
describe('Products', () => {
  it('get products page', done => {
    server
      .get(`${BASE_URL}/products`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('category_id');
          expect(m).to.have.property('name');
          expect(m).to.have.property('price_box');
          expect(m).to.have.property('box_unit_size');
          expect(m).to.have.property('price_unit');
          expect(m).to.have.property('weight');
          expect(m).to.have.property('stock');
          expect(m).to.have.property('description');
          expect(m).to.have.property('keywords');
        });
        done();
      });
  });
});
it('posts products', done => {
    const data = { 
        category_id: 1,
        name: 'teste',
        price_box: 45.67,
        box_unit_size: 6,
        price_unit: 5.40,
        weight: 10.45,
        stock: 67,
        description: 'grande produto bom',
        keywords: 'teste, testando'
    };
    server
      .post(`${BASE_URL}/products`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('category_id', data.category_id);
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('price_box', data.price_box);
          expect(m).to.have.property('box_unit_size', data.box_unit_size);
          expect(m).to.have.property('price_unit', data.price_unit);
          expect(m).to.have.property('weight', data.weight);
          expect(m).to.have.property('stock', data.stock);
          expect(m).to.have.property('description', data.description);
          expect(m).to.have.property('keywords', data.keywords);
        });
        done();
      });
  });