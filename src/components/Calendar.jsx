import React, { useState } from 'react';
import { Grid2, Paper, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { format, startOfMonth, endOfMonth, addMonths, subMonths, eachDayOfInterval } from 'date-fns';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');

  // Get the days of the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Handle previous and next month navigation
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Handle event creation
  const handleOpenDialog = (date) => {
    setSelectedDate(date);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);
  const handleSaveEvent = () => {
    if (eventTitle) {
      alert(`Event "${eventTitle}" saved on ${format(selectedDate, 'MMMM dd, yyyy')}`);
      setOpenDialog(false);
      setEventTitle('');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center">
          {format(currentMonth, 'MMMM yyyy')}
        </Typography>
        <Grid2 container justifyContent="center" spacing={2}>
          <Grid2 item>
            <Button onClick={goToPreviousMonth}>&lt; Previous</Button>
          </Grid2>
          <Grid2 item>
            <Button onClick={goToNextMonth}>Next &gt;</Button>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} style={{ marginTop: '20px' }}>
          {daysInMonth.map((day) => (
            <Grid2 item xs={2} key={day}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleOpenDialog(day)}
                style={{ padding: '10px', margin: '5px' }}
              >
                {format(day, 'd')}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Paper>

      {/* Event Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            type="text"
            fullWidth
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEvent} color="primary">
            Save Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Calendar;
