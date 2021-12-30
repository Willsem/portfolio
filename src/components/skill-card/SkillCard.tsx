import './style.css';

import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

type CardProps = {
  title: string,
  image: string,
  rating: number,
}

export const SkillCard = ({title, image, rating}: CardProps) => {
  return(
    <Card variant="outlined" className="card">
      <CardHeader
        avatar={
          <Avatar variant="rounded" src={image} alt={title} className="avatar" />
        }
        title={
          <Typography variant="h6" className="title">{title}</Typography>
        }
      />
      <CardContent>
        {[...Array(rating)].map((_1, _2) =>
          <RadioButtonCheckedIcon />
        )}
        {[...Array(5 - rating)].map((_1, _2) =>
          <RadioButtonUncheckedIcon />
        )}
      </CardContent>
    </Card>
  );
}
