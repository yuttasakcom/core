import { expect } from 'chai';
import { StaticResponse } from '../src/static-response';

function getRes() {

  const response = new StaticResponse();
  response.headers.set('Content-Type', 'text/html; charset=utf-8');
  response.status = 200;

  return response;

}

describe('StaticResponse', () => {

  describe('initialization', () => {

    it('should have headers set correctly', () => {

      const res = getRes();
      expect(res.headers.get('content-type')).to.eql('text/html; charset=utf-8');

    });

    it('should have status set correctly', () => {

      const res = getRes();
      expect(res.status).to.equal(200);

    });

    it('should have a "type" property containing "text/html"', () => {

      const res = getRes();
      expect(res.type).to.equal('text/html');

    });

    it('should have a "type" property containing an empty string if no Content-Type was set.', () => {

      const res = getRes();
      res.headers.delete('Content-Type');
      expect(res.type).to.equal('');

    });


  });

  it('should update the Content-Type header when "type" is set', async() => {

    const req = await getRes();
    req.type = 'text/plain';
    expect(req.headers.get('Content-Type')).to.equal('text/plain');

  });


  describe('changing the status code', () => {

    it('should not fail', () => {

      const res = getRes();
      res.status = 404;

      expect(res.status).to.equal(404);

    });

  });

  describe('sendInformational', () => {

    it('should be callable but do nothing', async () => {

      const res = getRes();
      expect(await res.sendInformational(102)).to.equal(undefined);

    });

  });

});
