import React, { Component } from 'react'

export class Index extends Component {
 constructor(props) {
      super(props)
    
      this.state = {
          openCard: true,
            startDate: moment().subtract(7, 'days'),
            endDate: moment(),
            startDateErr: false, endDateErr: false,
      }
    }
    
     accordionHandleChange = (val) => {
        this.setState({
            openCard: val
        })
    }

    handleChangeDate = name => event => {
        this.setState({
            [name]: event,
            graphSubmitShow: true,
        }, () => {
            const { startDate, endDate } = this.state;
            this.setState({
                startDateErr: false,
                endDateErr: false,
            })
            if (name === "startDate") {
                let days = endDate.diff(startDate, 'days');
                let current = moment().diff(startDate, 'days')
                if (days < 7 && current < 7) {
                    this.setState({
                        endDate: moment()
                    });
                } else {
                    this.setState({
                        endDate: moment(startDate).add(7, 'days')
                    });
                }
            } else if (name === "endDate") {
                let days = endDate.diff(startDate, 'days');
                if (days === 0) {
                    this.setState({
                        endDateErr: true,
                    })
                } else if (days) {
                    this.setState({
                        startDate: moment(endDate).subtract(7, 'days')
                    })
                }
            }
        });
    };
    
    
    dateSubmitFun = () => {
        const { startDateErr, endDateErr } = this.state;
        if (!startDateErr && !endDateErr) {
            this.setState({
                showDetails: true,
                openCard: false
            })
            this.initialApiCall()
        }
    }
    
  render() {
    return (
      <div>
        
<Accordion className='mb-3' expanded={openCard} onChange={(e, val) => this.accordionHandleChange(val)}>
                        <AccordionSummary
                            expandIcon={<Icon path={mdiChevronDown} size={1} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Filter</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='d-block'>
                            <div className='d-flex justify-content-between'>
                                <div className="col-sm-6">
                                    <DatePicker
                                        id="startdate"
                                        name="startdate"
                                        label="From"
                                        variant="outlined"
                                        format="ll"
                                        value={startDate}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        onChange={this.handleChangeDate('startDate')}
                                        maxDate={moment().subtract(1, "day")}
                                        error={startDateErr}
                                        fullWidth
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <DatePicker
                                        id="enddate"
                                        name="enddate"
                                        label="To"
                                        variant="outlined"
                                        format="ll"
                                        value={endDate}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        onChange={this.handleChangeDate('endDate')}
                                        minDate={startDate}
                                        maxDate={moment()}
                                        error={endDateErr}
                                        helperText={endDateErr ? "This day cannot be chosen" : null}
                                        fullWidth
                                        required
                                    />
                                </div>

                            </div>
                            <div className="pt-3 mr-0" align="right">
                                <Button variant="contained"
                                    size="medium"
                                    className={"bg-success text-white"}
                                    onClick={() => this.dateSubmitFun()}
                                >Submit</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
      </div>
    )
  }
}

export default Index
