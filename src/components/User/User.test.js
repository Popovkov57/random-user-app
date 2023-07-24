import renderer from 'react-test-renderer';
import User from './User';

const user = {
    address: {
        city: "South Raymon",
        coordinates: { lat: 67.67948502493107, lng: -125.03753710005387 },
        country: "United States",
        state: "Alabama",
        street_address: "866 Schmitt Islands",
        street_name: "Hagenes Tunnel",
        zip_code: "53746"
    },
    avatar: "https://robohash.org/temporibusrationevel.png?size=300x300&set=set1",
    credit_card: {
        cc_number: "4617-7970-0660-6386"
    },
    date_of_birth: "1970-09-20",
    email: "trisha.mcdermott@email.com",
    employment: {
        key_skill: "Networking skills", title: "Chief Administration Producer"
    },
    first_name: "Trisha",
    gender: "Genderqueer",
    id: 3191,
    last_name: "McDermott",
    password: "ic6BjrZoF5",
    phone_number: "+381 291-255-7022",
    social_insurance_number: "549333771",
    subscription: {
        payment_method: "Credit card", plan: "Starter", status: "Pending", term: "Annual"
    },
    uid: "fae95f66-c8f9-4718-9afa-10e9dbb2310f",
    username: "trisha.mcdermott"
}

// Mock UseNavigate function
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

const component = renderer.create(
    <User user={user}></User>,
);

describe('User displaying', () => {
    it('it should match snapshot', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('it should return employment title', () => {
        let employmentTitleText = component.root.findByProps({ className: 'text-slate-500 font-medium text-xs' }).props.children
        expect(employmentTitleText).toEqual("Chief Administration Producer")
    });
})

describe('User click', () => {
    it('it should call navigate', () => {
        let userCard = component.root.findByProps({ className: 'flex flex-row rounded-xl p-4 bg-white ring-1 ring-slate-900/5 hover:bg-slate-200 cursor-pointer' })
        userCard.props.onClick();
        expect(mockedUsedNavigate).toBeCalled();
    })
})