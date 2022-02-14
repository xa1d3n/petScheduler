import * as React from 'react';
import { fireEvent, render, screen, getByTitle } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should add a day when next button is clicked', () => {
    const setDate = jest.fn();
    const date = new Date();
    const onShowCalendar = jest.fn();

    render(
      <Header setDate={setDate} date={date} onShowCalendar={onShowCalendar} />
    );

    const nextBtn = screen.getByTitle('next day');
    fireEvent.click(nextBtn);
    expect(setDate).toBeCalledWith(date);
  });

  it('should subtract a day when previous button is clicked', () => {
    const setDate = jest.fn();
    const date = new Date();
    const onShowCalendar = jest.fn();

    render(
      <Header setDate={setDate} date={date} onShowCalendar={onShowCalendar} />
    );

    const prevBtn = screen.getByTitle('previous day');
    fireEvent.click(prevBtn);
    expect(setDate).toBeCalledWith(date);
  });
});
