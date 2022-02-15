// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: zestchain/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type MsgCreateAd struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Title   string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Pot     string `protobuf:"bytes,3,opt,name=pot,proto3" json:"pot,omitempty"`
	Url     string `protobuf:"bytes,4,opt,name=url,proto3" json:"url,omitempty"`
	Msg     string `protobuf:"bytes,5,opt,name=msg,proto3" json:"msg,omitempty"`
	Tags    string `protobuf:"bytes,6,opt,name=tags,proto3" json:"tags,omitempty"`
	Prefs   string `protobuf:"bytes,7,opt,name=prefs,proto3" json:"prefs,omitempty"`
}

func (m *MsgCreateAd) Reset()         { *m = MsgCreateAd{} }
func (m *MsgCreateAd) String() string { return proto.CompactTextString(m) }
func (*MsgCreateAd) ProtoMessage()    {}
func (*MsgCreateAd) Descriptor() ([]byte, []int) {
	return fileDescriptor_8ad62989248de80a, []int{0}
}
func (m *MsgCreateAd) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateAd) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateAd.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateAd) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateAd.Merge(m, src)
}
func (m *MsgCreateAd) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateAd) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateAd.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateAd proto.InternalMessageInfo

func (m *MsgCreateAd) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCreateAd) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *MsgCreateAd) GetPot() string {
	if m != nil {
		return m.Pot
	}
	return ""
}

func (m *MsgCreateAd) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *MsgCreateAd) GetMsg() string {
	if m != nil {
		return m.Msg
	}
	return ""
}

func (m *MsgCreateAd) GetTags() string {
	if m != nil {
		return m.Tags
	}
	return ""
}

func (m *MsgCreateAd) GetPrefs() string {
	if m != nil {
		return m.Prefs
	}
	return ""
}

type MsgCreateAdResponse struct {
	Counter string `protobuf:"bytes,1,opt,name=counter,proto3" json:"counter,omitempty"`
}

func (m *MsgCreateAdResponse) Reset()         { *m = MsgCreateAdResponse{} }
func (m *MsgCreateAdResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateAdResponse) ProtoMessage()    {}
func (*MsgCreateAdResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8ad62989248de80a, []int{1}
}
func (m *MsgCreateAdResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateAdResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateAdResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateAdResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateAdResponse.Merge(m, src)
}
func (m *MsgCreateAdResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateAdResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateAdResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateAdResponse proto.InternalMessageInfo

func (m *MsgCreateAdResponse) GetCounter() string {
	if m != nil {
		return m.Counter
	}
	return ""
}

func init() {
	proto.RegisterType((*MsgCreateAd)(nil), "cytruslabs.zestchain.zestchain.MsgCreateAd")
	proto.RegisterType((*MsgCreateAdResponse)(nil), "cytruslabs.zestchain.zestchain.MsgCreateAdResponse")
}

func init() { proto.RegisterFile("zestchain/tx.proto", fileDescriptor_8ad62989248de80a) }

var fileDescriptor_8ad62989248de80a = []byte{
	// 281 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x91, 0xbf, 0x4e, 0xf3, 0x30,
	0x14, 0xc5, 0xe3, 0x2f, 0xfd, 0xf3, 0x61, 0x16, 0x64, 0x18, 0x2c, 0x06, 0x0b, 0x75, 0x42, 0x42,
	0x4a, 0x04, 0x7d, 0x02, 0x60, 0x44, 0x5d, 0x3a, 0xb2, 0x25, 0xc1, 0xb8, 0x91, 0x92, 0x38, 0xf2,
	0xbd, 0x96, 0x5a, 0x9e, 0x82, 0x17, 0xe0, 0x7d, 0x18, 0x3b, 0x32, 0xa2, 0xe4, 0x45, 0x90, 0x6d,
	0xb5, 0xc9, 0x84, 0xc4, 0x76, 0xce, 0xcf, 0xd6, 0xf1, 0xf1, 0xbd, 0x94, 0xbd, 0x49, 0xc0, 0x62,
	0x93, 0x95, 0x4d, 0x8a, 0xdb, 0xa4, 0x35, 0x1a, 0x35, 0x13, 0xc5, 0x0e, 0x8d, 0x85, 0x2a, 0xcb,
	0x21, 0x39, 0x1e, 0x0f, 0x6a, 0xf1, 0x41, 0xe8, 0xe9, 0x0a, 0xd4, 0xa3, 0x91, 0x19, 0xca, 0xfb,
	0x17, 0xc6, 0xe9, 0xbc, 0x70, 0x5a, 0x1b, 0x4e, 0xae, 0xc8, 0xf5, 0xc9, 0xfa, 0x60, 0xd9, 0x05,
	0x9d, 0x62, 0x89, 0x95, 0xe4, 0xff, 0x3c, 0x0f, 0x86, 0x9d, 0xd1, 0xb8, 0xd5, 0xc8, 0x63, 0xcf,
	0x9c, 0x74, 0xc4, 0x9a, 0x8a, 0x4f, 0x02, 0xb1, 0xa6, 0x72, 0xa4, 0x06, 0xc5, 0xa7, 0x81, 0xd4,
	0xa0, 0x18, 0xa3, 0x13, 0xcc, 0x14, 0xf0, 0x99, 0x47, 0x5e, 0xbb, 0xfc, 0xd6, 0xc8, 0x57, 0xe0,
	0xf3, 0x90, 0xef, 0xcd, 0x22, 0xa5, 0xe7, 0xa3, 0x7a, 0x6b, 0x09, 0xad, 0x6e, 0x40, 0xfa, 0x9a,
	0xda, 0x36, 0x28, 0x87, 0x9a, 0xc1, 0xde, 0x01, 0x8d, 0x57, 0xa0, 0x58, 0x45, 0xff, 0x1f, 0xff,
	0x74, 0x93, 0xfc, 0x3e, 0x84, 0x64, 0xf4, 0xc2, 0xe5, 0xf2, 0x0f, 0x97, 0x0f, 0x75, 0x1e, 0x9e,
	0x3e, 0x3b, 0x41, 0xf6, 0x9d, 0x20, 0xdf, 0x9d, 0x20, 0xef, 0xbd, 0x88, 0xf6, 0xbd, 0x88, 0xbe,
	0x7a, 0x11, 0x3d, 0xdf, 0xaa, 0x12, 0x37, 0x36, 0x4f, 0x0a, 0x5d, 0xa7, 0x43, 0x70, 0x3a, 0x6c,
	0x6a, 0x3b, 0xd2, 0xb8, 0x6b, 0x25, 0xe4, 0x33, 0xbf, 0xb9, 0xe5, 0x4f, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x23, 0x98, 0x1f, 0x22, 0xcf, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	CreateAd(ctx context.Context, in *MsgCreateAd, opts ...grpc.CallOption) (*MsgCreateAdResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) CreateAd(ctx context.Context, in *MsgCreateAd, opts ...grpc.CallOption) (*MsgCreateAdResponse, error) {
	out := new(MsgCreateAdResponse)
	err := c.cc.Invoke(ctx, "/cytruslabs.zestchain.zestchain.Msg/CreateAd", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	CreateAd(context.Context, *MsgCreateAd) (*MsgCreateAdResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) CreateAd(ctx context.Context, req *MsgCreateAd) (*MsgCreateAdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAd not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_CreateAd_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateAd)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateAd(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cytruslabs.zestchain.zestchain.Msg/CreateAd",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateAd(ctx, req.(*MsgCreateAd))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "cytruslabs.zestchain.zestchain.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateAd",
			Handler:    _Msg_CreateAd_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "zestchain/tx.proto",
}

func (m *MsgCreateAd) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateAd) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateAd) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Prefs) > 0 {
		i -= len(m.Prefs)
		copy(dAtA[i:], m.Prefs)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Prefs)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Tags) > 0 {
		i -= len(m.Tags)
		copy(dAtA[i:], m.Tags)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Tags)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Msg) > 0 {
		i -= len(m.Msg)
		copy(dAtA[i:], m.Msg)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Msg)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Url) > 0 {
		i -= len(m.Url)
		copy(dAtA[i:], m.Url)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Url)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Pot) > 0 {
		i -= len(m.Pot)
		copy(dAtA[i:], m.Pot)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Pot)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateAdResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateAdResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateAdResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Counter) > 0 {
		i -= len(m.Counter)
		copy(dAtA[i:], m.Counter)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Counter)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgCreateAd) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Pot)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Url)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Msg)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Tags)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Prefs)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgCreateAdResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Counter)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgCreateAd) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateAd: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateAd: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pot", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pot = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Url", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Url = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Msg", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Msg = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tags", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Tags = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Prefs", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Prefs = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateAdResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateAdResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateAdResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Counter", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Counter = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
