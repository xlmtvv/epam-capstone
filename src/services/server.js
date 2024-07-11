import { createServer } from 'miragejs';

export function mockServer() {
  createServer({
    routes() {

      this.namespace = 'api';

      this.timing = 3000; 

      this.get('/educations', () => {
        return [
          {
            date: '2018',
            title: 'Bachelor of Science in Computer Science',
            text: 'Studied computer science and graduated with honors.'
          },
          {
            date: '2016',
            title: 'Associate Degree in Information Technology',
            text: 'Completed an associate degree in IT with a focus on networking.'
          },
          {
            date: '2014',
            title: 'Lorem ipsum dolor sit amet',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            date: '2012',
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            date: '2010',
            title: 'Associate Degree in Computer Science',
            text: 'Completed an associate degree in IT with a focus on engineering.'
          }
        ];
      });

      this.get('/skills', () => {
        return localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [];
      });

      this.post('/skills', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { ...attrs };
      });
    }
  });
}
