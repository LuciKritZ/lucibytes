import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card.ui';
import { formatDate } from '@/app/blog/blog.utils';

type Props = {
  title: string;
  summary: string;
  date: string;
};

const CardCategory = ({ title, summary, date }: Props) => {
  return (
    <Card className='w-[350px] h-[290px] shadow-lg'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p>{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
