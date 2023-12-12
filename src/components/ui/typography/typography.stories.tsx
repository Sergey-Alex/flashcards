import { CSSProperties } from 'react'

import { Meta } from '@storybook/react'

import { Typography } from './typography'

export default {
  tags: ['autodocs'],
  title: 'Components/Typography',
} as Meta<typeof Typography.H1>

export const AllTypography = {
  render: () => (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <Typography.Large>Large</Typography.Large>
        <Typography.Large>{text}</Typography.Large>
      </div>
      <div style={columnStyle}>
        <Typography.H1>H1</Typography.H1>
        <Typography.H1>{text}</Typography.H1>
      </div>
      <div style={columnStyle}>
        <Typography.H2>H2</Typography.H2>
        <Typography.H2>{text}</Typography.H2>
      </div>
      <div style={columnStyle}>
        <Typography.H3>H3</Typography.H3>
        <Typography.H3>{text}</Typography.H3>
      </div>
      <div style={columnStyle}>
        <Typography.Body1>Body 1</Typography.Body1>
        <Typography.Body1>{text}</Typography.Body1>
      </div>
      <div style={columnStyle}>
        <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
        <Typography.Subtitle1>{text}</Typography.Subtitle1>
      </div>
      <div style={columnStyle}>
        <Typography.Body2>Body 2</Typography.Body2>
        <Typography.Body1>{text}</Typography.Body1>
      </div>
      <div style={columnStyle}>
        <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
        <Typography.Subtitle2>{text}</Typography.Subtitle2>
      </div>
      <div style={columnStyle}>
        <Typography.Caption>Caption</Typography.Caption>
        <Typography.Caption>{text}</Typography.Caption>
      </div>
      <div style={columnStyle}>
        <Typography.Overline>Overline</Typography.Overline>
        <Typography.Overline>{text}</Typography.Overline>
      </div>
      <div style={columnStyle}>
        <Typography.Link1>Link1</Typography.Link1>
        <Typography.Link1>{text}</Typography.Link1>
      </div>
      <div style={columnStyle}>
        <Typography.Link2>Link2</Typography.Link2>
        <Typography.Link2>{text}</Typography.Link2>
      </div>
    </div>
  ),
}

const text = `Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH`
const columnStyle: CSSProperties = {
  display: 'grid',
  gridColumnGap: '32px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'end',
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}
