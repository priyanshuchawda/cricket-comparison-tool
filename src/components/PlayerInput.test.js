
   import { render, screen } from '@testing-library/react';
   import PlayerInput from './PlayerInput';

   test('renders Player Input component', () => {
       render(<PlayerInput />);
       expect(screen.getByLabelText(/Player 1 ID/i)).toBeInTheDocument();
   });