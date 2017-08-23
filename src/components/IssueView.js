import React, { Component } from 'react';
import moment from 'moment';
import LOCATIONS from '../new_admin_subset.json';

const mapCategoryToImage = {
  Health: 'http://dl.dropboxusercontent.com/s/h3o4xftxvijb74u/pattern%20%281%29.png',
  Education: 'http://dl.dropboxusercontent.com/s/p8p9i6632ogi5nn/pattern.png',
  Agriculture: 'http://dl.dropboxusercontent.com/s/3iij3nubtbc4uw6/pattern%20%283%29.png',
  'Disaster Risk Reduction': 'http://dl.dropboxusercontent.com/s/p8p9i6632ogi5nn/pattern.png',
  Others: 'http://dl.dropboxusercontent.com/s/3iij3nubtbc4uw6/pattern%20%283%29.png',
  'No category assigned yet': 'http://dl.dropboxusercontent.com/s/h3o4xftxvijb74u/pattern%20%281%29.png',

};

const mapStatusToSimpleStatus = {
  Resolved: 'Resolved',
  'Passed to Sthaniya-Niji Sabha by Sthaniya Sabha': 'In Process',
  'Will be discussed in the upcoming Sthaniya Sabha': 'In Process',
};

const issues = [
  {
    id: 93,
    title: 'मेरो गाउँ को बाटो बर्खामा हिल्लाम्मै हुन्छ ',
    description: 'मेरो गाउँ को बाटो बर्खामा हिल्लाम्मै हुन्छ . गाडी त के मान्छे हिन्न पनि गार्हो हुन्छ ',
    district: '23',
    municipality: '23002',
    ward: '3',
    address: 'Barabise',
    category: 'Others',
    tags: null,
    ticket: 'T93TXC',
    status: 'Resolved',
    issue_src: 'web',
    created_by_admin: false,
    createdat: '2017-08-17T14:40:58.985Z',
    user: {
      id: 82,
      name: 'Saurav Bhattarai',
      email: 'srvbhattarai@gmail.com',
      mobile: '9841834495',
    },
    issueimages: [
      {
        path: 'e5d63341d4ab410018ac0a84bb8d1854',
        type: 'jpeg',
      },
    ],
    comments: [
      {
        id: 114,
      },
      {
        id: 113,
      },
      {
        id: 112,
      },
      {
        id: 111,
      },
      {
        id: 94,
      },
      {
        id: 93,
      },
      {
        id: 92,
      },
      {
        id: 91,
      },
      {
        id: 90,
      },
    ],
    subscribed: false,
  },
  {
    id: 94,
    title: 'Lots of chemical wastes',
    description: 'There are many carpet industries in my locality. They produce very highly toxic chemical wastes.  It is causing serious health hazards for us.',
    district: '27',
    municipality: '27001',
    ward: '5',
    address: 'Budhanilkantha',
    category: 'Health',
    tags: null,
    ticket: 'T94GEV',
    status: 'Passed to Sthaniya-Niji Sabha by Sthaniya Sabha',
    issue_src: 'web',
    created_by_admin: false,
    createdat: '2017-08-17T14:57:28.383Z',
    user: {
      id: 13,
      name: 'Saurav ',
      email: 'srvbhattarai@gmail.com',
      mobile: '9849821249',
    },
    issueimages: [],
    comments: [
      {
        id: 98,
      },
      {
        id: 97,
      },
      {
        id: 96,
      },
      {
        id: 95,
      },
    ],
    subscribed: false,
  },
  {
    id: 96,
    title: 'ध्वनी प्रदुषण ',
    description: 'हाम्रो टोलमा संचालित क्रेषर उद्योग हरुले ज्यादै ठुलो आवाज निकालेर बच्चा हरुलाई पड्न सारै गारो भयको छ. कृपया यो समस्या सम्बन्धित ठाउँ सम्म पुर्याईदिनु होला .',
    district: '25',
    municipality: '25002',
    ward: '6',
    address: 'लेले ',
    category: 'Education',
    tags: null,
    ticket: 'T96BKA',
    status: 'Will be discussed in the upcoming Sthaniya Sabha',
    issue_src: 'web',
    created_by_admin: false,
    createdat: '2017-08-18T04:43:13.602Z',
    user: {
      id: 85,
      name: 'Shukadev',
      email: 'amgains@gmail.com',
      mobile: '9841954620',
    },
    issueimages: [],
    comments: [],
    subscribed: false,
  },
  {
    id: 98,
    title: 'free health services',
    description: 'we heard about free health service but the health post does not have any free medicine. ',
    district: '27',
    municipality: '27005',
    ward: '3',
    address: 'thali',
    category: 'Agriculture',
    tags: null,
    ticket: 'T98AJT',
    status: 'Will be discussed in the upcoming Sthaniya Sabha',
    issue_src: 'web',
    created_by_admin: false,
    createdat: '2017-08-18T05:07:09.808Z',
    user: {
      id: 85,
      name: 'Shukadev',
      email: 'amgains@gmail.com',
      mobile: '9841954620',
    },
    issueimages: [],
    comments: [],
    subscribed: false,
  },
];

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    };

    this.renderCategoryImage = this.renderCategoryImage.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  /*eslint-disable*/
  renderDescription(desc) {
    if (desc.length > 100) {
      return `${desc.slice(0, 100)}...`;
    } else {
      return desc;
    }
  }

  renderCategoryImage(category) {
    return mapCategoryToImage[category];
  }
  /* eslint-enable */


  render() {
    const issue = this.props.issue;
    return (
      <div className="col-sm-12 col-md-4 col-xs-12">

        <div className="card">
          <div className="relative ">
            <div className="image-container">
              {issue.issueimages.length !== 0 && <img className="card-img-top" src={`http://174.138.31.169/api/v1/issue/media/${issue.issueimages[0].path}`} alt="Card cap" />}
              {issue.issueimages.length === 0 && <img className="card-img-top" src={this.renderCategoryImage(issue.category)} alt="Card cap" />}
            </div>
            <div className="  card-img-overlay" />
            <p className="status-text  card-text white-text"><span className="grey-bg padding-small"><small className=" ">{mapStatusToSimpleStatus[issue.status].toUpperCase()}</small></span></p>
          </div>
          <div className="card-block">
            <h4 className="card-title">{issue.title}</h4>
            <p className="card-text">{this.renderDescription(issue.description)}</p>
          </div>
          <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <small className="text-muted"><strong>Location: </strong>
                <br />{`Ward ${issue.ward}, ${LOCATIONS[issue.district].vdcs[issue.municipality].name_en}, ${LOCATIONS[issue.district].name_en}`}
              </small>
            </li>
          </ul>
          <div className="card-footer">
            <small className="text-muted">Last updated: {moment(issue.createdat, moment.ISO_8601).fromNow()}</small>
          </div>
        </div>
      </div>

    );
  }
}


const CardContainer = () => {
  return (
    <div className="container-fluid ">

      <div className="row  ">
        <div className="card-deck">
          {
            issues.map((issue) => {
              console.log(issue);
              return <CardComponent key={issue.id} issue={issue} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
